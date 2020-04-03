package src;

public class Edge {
    private final Bar v;
    private final Bar w;
    private final double weight;

    //constructor
    public Edge(Bar v, Bar w, double weight) {
        this.v = v;
        this.w = w;
        this.weight = weight;
    }

    //these functions return the state variables
    public double weight() {return this.weight;}
    public Bar start() {return this.v;}
    public Bar end() {return this.w;}

    //Compares this edge to another edge in terms of weight
    public int CompareTo(Edge that) {
        if(this.weight() < that.weight()) return -1;
        else if(this.weight() == that.weight()) return 0;
        return 1;
    }

}
