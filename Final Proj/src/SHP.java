package src;

import java.util.*;

//shortest hamiltonian path
public class SHP {

    private Map<Bar, Boolean> marked;
    private Graph G;
    private ArrayList<ArrayList<Bar>> paths;

    public SHP(Graph G, Bar start){
        this.G = G;
        marked = new HashMap<Bar, Boolean>();
        for(Bar b : G.getBars())
            marked.putIfAbsent(b, false);

    paths = new ArrayList<>();

    permutate(G.getBars(), G.V());


    }

    //https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/
    public void permutate(ArrayList<Bar> a, int size){

        if (size == 1){
            ArrayList<Bar> temp = new ArrayList<>();
            for(Bar b : a)
                temp.add(b);
            paths.add(temp);
        }


        for(int i = 0; i < size; i++){

            permutate(a,size-1);

            if(size % 2 == 1){
                Collections.swap(a,0 ,size - 1);

            } else {
                Collections.swap(a,i ,size - 1);
            }
        }

    }

    //if they are all marked and there are v-1 edges then it will be valid
    public boolean ValidPermutation(ArrayList<Bar> barSeq){
        //check if they are all marked first
        for(Bar b : G.getBars())
            if(!marked.get(b)) return false;

        if(G.E() == G.V() - 1)
            return true;

        return false;
    }

    public double distTo(Bar a, Bar b){
        return 0.0;
    }

    public ArrayList<Bar> findShortest(){

        ArrayList<Bar> shortest = paths.get(0);
        double bestDist = Double.POSITIVE_INFINITY;
        for(ArrayList<Bar> bars : paths){
            double total = 0.0;
            for(int i = 0; i < bars.size() - 1; i ++)
                total += distTo(bars.get(i), bars.get(i+ 1));
            if (total < bestDist){
                shortest = bars;
                bestDist = total;
            }
        }

        return shortest;
    }

}
