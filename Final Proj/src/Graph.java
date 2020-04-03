package src;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

public class Graph {

    private Map<Bar, ArrayList<Edge>> adj = new HashMap<>();
    private int E = 0;
    private int V = 0;

    public void addVertex(Bar b){
        adj.putIfAbsent(b, new ArrayList<>());
        V ++;
    }

    public void addEdge(Bar v, Bar w, double weight){
        adj.get(v).add(new Edge(v,w,weight));
        adj.get(w).add(new Edge(w,v,weight));
        E ++;
    }

    public ArrayList<Bar> getBars(){
        ArrayList<Bar> bars = new ArrayList<Bar>();
        for(Bar b : adj.keySet())
            bars.add(b);
        return bars;
    }

    public Map<Bar, ArrayList<Edge>> adj(){
        return adj;
    }

    public int V(){
        return V;
    }
    public int E(){
        return E;
    }

}
