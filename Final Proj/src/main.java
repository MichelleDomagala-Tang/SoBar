package src;

import java.util.ArrayList;

public class main {

    private ArrayList<ArrayList<Integer>> array = new ArrayList<>();

    public static Graph createGraph(ArrayList<Bar> bars){

        //for each bar if there is not an edge already connect to every other bar
        //weight is their dist to which is calculated thru the distances thing with lon and lat

        return null;

    }



    public static void main(String args[]){
        Graph G = new Graph();
        G.addVertex(new Bar ("a",0,0));
        G.addVertex(new Bar ("b",0,0));
        G.addVertex(new Bar ("c",0,0));
        SHP hampath = new SHP(G, G.getBars().get(0));

    }

}
