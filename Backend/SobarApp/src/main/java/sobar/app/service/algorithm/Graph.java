package sobar.app.service.algorithm;

import sobar.app.service.model.Business;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Graph {

    private Map<Business, ArrayList<Edge>> adj = new HashMap<>();
    private int E = 0;
    private int V = 0;

    public void addVertex(Business b) {
        adj.putIfAbsent(b, new ArrayList<>());
        V++;
    }

    public void addEdge(Business v, Business w, double weight) {
        adj.get(v).add(new Edge(v, w, weight));
        adj.get(w).add(new Edge(w, v, weight));
        E++;
    }

    public ArrayList<Business> getBars() {
        return new ArrayList<Business>(adj.keySet());
    }

    public Map<Business, ArrayList<Edge>> adj() {
        return adj;
    }

    public int getV() {
        return V;
    }

    public int getE() {
        return E;
    }

}
