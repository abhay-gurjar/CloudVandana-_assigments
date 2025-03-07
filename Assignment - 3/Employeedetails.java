import java.util.*;

class Employee {
    int id;
    String name;
    double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: " + salary);
    }
}

public class Employeedetails {
    public static void main(String[] args) {
        List<Employee> empdetail = new ArrayList<>();
        empdetail.add(new Employee(1, "Abhay", 20000));
        empdetail.add(new Employee(2, "Nikunj", 10000));
        empdetail.add(new Employee(3, "Shivam", 5000));

        for (Employee X : empdetail) {
            X.displayDetails();
        }
    }
}