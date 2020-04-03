package src;

public class Bar {
    private double lon;
    private double lat;
    private String name;

    public Bar(String name, double lon, double lat) {
        this.lat = lat;
        this.lon = lon;
        this.name = name;
    }

    //returns the state variables
    public double lon(){return lon;}
    public double lat(){return lat;}
    public String name(){return name;}
}
