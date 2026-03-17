class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model}'s engine started."

    def stop_engine(self):
        return f"{self.brand} {self.model}'s engine stopped."

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, doors, electric=False):
        super().__init__(brand, model, year)
        self.doors = doors
        self.electric = electric

    def start_engine(self):
        if self.electric:
            return f"{self.brand} {self.model} (electric) powered on silently."
        else:
            return super().start_engine()

    def open_trunk(self):
        return f"{self.brand} {self.model}'s trunk is now open."

    def __str__(self):
        type_car = "Electric" if self.electric else "Gasoline"
        return f"{super().__str__()} - {type_car} Car with {self.doors} doors"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, type_motorcycle):
        super().__init__(brand, model, year)
        self.type_motorcycle = type_motorcycle 

    def start_engine(self):
        return f"{self.brand} {self.model} revs up loudly!"

    def do_wheelie(self):
        return f"{self.brand} {self.model} is doing a wheelie!"

    def __str__(self):
        return f"{super().__str__()} - {self.type_motorcycle} Motorcycle"