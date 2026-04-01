import csv
import math
def haversine(lat1, lon1, lat2, lon2):
    lat1, lon1, lat2, lon2 = map(math.radians, [float(lat1), float(lon1), float(lat2), float(lon2)])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    R = 6371
    km = R * c
    miles = km * 0.621371
    return round(km,2), round(miles,2)
with open('haversine-input.csv', 'r') as infile, open('output.csv', 'w', newline='') as outfile:
    reader = csv.DictReader(infile)
    fieldnames = reader.fieldnames + ["Distance_KM","Distance_Miles"]
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()
    for row in reader:
        km, miles = haversine(row["Latitude-1"], row["Longitude-1"], row["Latitude-2"], row["Longitude-2"])
        row["Distance_KM"] = km
        row["Distance_Miles"] = miles
        writer.writerow(row)
print("Output saved as output.csv")