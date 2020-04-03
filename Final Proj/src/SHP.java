package src;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

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

    paths = new ArrayList<ArrayList<Bar>>();
    permutate(G.getBars(), G.V());


    for(ArrayList<Bar> bars : paths){
        for(Bar b : bars){
            System.out.print(b.name());
        }
        System.out.println();
    }

    }

    //https://www.geeksforgeeks.org/heaps-algorithm-for-generating-permutations/
    public void permutate(ArrayList<Bar> a, int size){

        if (size == 1)
            paths.add(a);

        for(int i = 0; i < size; i++){
            permutate(a,size-1);

            if(size % 2 == 1){
                Bar temp = a.get(0);
                a.set(0,a.get(size-1));
                a.set(size-1, temp);

            } else {
                Bar temp = a.get(i);
                a.set(i,a.get(size-1));
                a.set(size-1, temp);
                
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


}
