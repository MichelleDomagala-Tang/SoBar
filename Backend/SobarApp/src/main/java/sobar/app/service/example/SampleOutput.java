package sobar.app.service.example;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Scanner;

import com.google.gson.Gson;

import sobar.app.service.algorithm.Graph;
import sobar.app.service.algorithm.ShortestHamiltonianPath;
import sobar.app.service.model.Business;

public class SampleOutput {

	public static void main(String[] args) {

		// gets the info in the bag
		FileInputStream inputStream = null;
		Scanner sc = null;

		Gson gson = new Gson();
		ArrayList<Business> businesses = new ArrayList<>();

		try {
			// Load businesses
			inputStream = new FileInputStream("data/business.json");
			sc = new Scanner(inputStream, "UTF-8");

			while (sc.hasNextLine()) {
				String line = sc.nextLine();
				Business b = gson.fromJson(line, Business.class);

				businesses.add(b);
			}
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} finally {
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}

			if (sc != null) {
				sc.close();
			}
		}

		// creates the sample bars (business)
		ArrayList<Business> bars = new ArrayList<>();
		bars.add(businesses.get(22));
		bars.add(businesses.get(77));
		bars.add(businesses.get(719));
		bars.add(businesses.get(226));
		bars.add(businesses.get(708));

		// creates the graph
		Graph G = new Graph();
		// adds the bars to the graph
		for (Business b : bars)
			G.addVertex(b);

		// finds the shortest ham path
		ShortestHamiltonianPath shp = new ShortestHamiltonianPath(G, G.getBars().get(0));

		// shortest
		ArrayList<Business> shortestPath = shp.findShortest();

		// displays the found path
		System.out.println(String.format("%-25s | %-15s | %-15s | %-15s | %-15s \r", "Name", "City", "State/Prov",
				"Latitude", "Longitude"));
		System.out.println(String.format("%-25s | %-15s | %-15s | %-15s | %-15s \r", "____", "____", "__________",
				"________", "_________"));
		for (Business b : shortestPath)
			System.out.println(String.format("%-25s | %-15s | %-15s | %-15s | %-15s \r", b.getName(), b.getCity(),
					b.getState(), b.getLatitude(), b.getLongitude()));

		double dist = 0;
		for (int i = 0; i < shortestPath.size() - 1; i++)
			dist += shp.distTo(shortestPath.get(i), shortestPath.get(i + 1));

		System.out.println(String.format("Total Distance Traveled : %.3f km", dist / 1000));

	}
}