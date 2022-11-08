from flask import Flask, jsonify 
from flask_pymongo import PyMongo


# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/death_db")


# Route to render index.html template using data from Mongo

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"Death factors in a year: /api/v1.0/<year><br/>"
        f"Death factors from 1990 to 2019(under 50 years old): /api/v1.0/under50<br/>"
        f"Death factors from 1990 to 2019(over 50 years old):: /api/v1.0/over50<br/>"
        f"Death factors of a country over 20 years(1990-2019): /api/v1.0/<country_name><br/>"
    )
    
# Route that will trigger the scrape function
@app.route('/api/v1.0/<year>')
def year(year):
    precipitation_list = []
    for date, prcp in query_result:
        precipitation = {}
        precipitation["Date"] = date
        precipitation["Precipitation"] = prcp
        precipitation_list.append(precipitation)
    return jsonify(precipitation)


@app.route('/api/v1.0/under50')
def tobs():
    session = Session(engine)
    recent_date = session.query(Measurement.date).order_by(Measurement.date.desc()).first()[0]
    converted_recent_date = dt.datetime.strptime(recent_date, '%Y-%m-%d')
    query_date = dt.date(converted_recent_date.year -1, converted_recent_date.month, converted_recent_date.day)
    sel = [Measurement.date,Measurement.tobs]
    query_result = session.query(*sel).filter(Measurement.date >= query_date).all()
    session.close()

    tobs_list = []
    for date, tob in query_result:
        tobs = {}
        tobs["Date"] = date
        tobs["Tob"] = tob
        tobs_list.append(tobs)

    return jsonify(tobs_list)

@app.route('/api/v1.0/over50')
def stations():
    session = Session(engine)
    sel = [Station.station,Station.name,Station.latitude,Station.longitude,Station.elevation]
    query_result = session.query(*sel).all()
    session.close()

    stations_list = []
    for station,name,lat,lon,el in query_result:
        stations = {}
        stations["Station"] = station
        stations["Name"] = name
        stations["Lat"] = lat
        stations["Lon"] = lon
        stations["Elevation"] = el
        stations_list.append(stations)

    return jsonify(stations_list)

@app.route('/api/v1.0/<country_name>')
def start_to_end(country_name):
    session = Session(engine)
    sel =[func.min(Measurement.tobs),func.max(Measurement.tobs),func.avg(Measurement.tobs)]
    query_result = session.query(*sel).filter(Measurement.date >= start).filter(Measurement.date <= end).all()
    session.close()

    tobs_list = []
    for min,avg,max in query_result:
        tobs = {}
        tobs["Min"] = min
        tobs["Average"] = avg
        tobs["Max"] = max
        tobs_list.append(tobs)

    return jsonify(tobs_list)

@app.route('/api/v1.0/<start>')
def start(start):
    session = Session(engine)
    sel =[func.min(Measurement.tobs),func.max(Measurement.tobs),func.avg(Measurement.tobs)]
    query_result = session.query(*sel).filter(Measurement.date >= start).all()
    session.close()

    tobs_list = []
    for min,avg,max in query_result:
        tobs = {}
        tobs["Min"] = min
        tobs["Average"] = avg
        tobs["Max"] = max
        tobs_list.append(tobs)

    return jsonify(tobs_list)

if __name__ == "__main__":
    app.run(debug=True)