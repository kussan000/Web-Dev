from models import Vehicle, Car, Motorcycle

def main():
  
    v1 = Vehicle("Generic", "Model X", 2020)
    c1 = Car("Tesla", "Model S", 2023, doors=4, electric=True)
    c2 = Car("Toyota", "Corolla", 2022, doors=4)
    m1 = Motorcycle("Harley-Davidson", "Iron 883", 2021, type_motorcycle="Cruiser")
    m2 = Motorcycle("Yamaha", "R1", 2022, type_motorcycle="Sport")


    vehicles = [v1, c1, c2, m1, m2]

    
    for vehicle in vehicles:
        print(vehicle) 
        print(vehicle.start_engine())  

        if isinstance(vehicle, Car):
            print(vehicle.open_trunk())
        if isinstance(vehicle, Motorcycle):
            print(vehicle.do_wheelie())

        print("-" * 40)


if __name__ == "__main__":
    main()