# ENGO651-Final_Project

## Overview:
The project is aimed to make an application that can help recommend the best route to desired destinations in Calgary. Users can see get the traffic volume and traffic incidents information. Route design function will only be available after the user login. 

## Libraries required to install:
- Flask
- Flask-Session
- psycopg2-binary
- SQLAlchemy
You can find all of these libraries in the `requirements.txt` and install all of them by running this command `pip3 install -r requirements.txt` in the terminal window.

## Tools and Resources used:
- HTML 5
- CSS
- Python flask 
- Javascript
- [Bootstrap](https://getbootstrap.com/)
- [Leaflet](https://leafletjs.com/)
- [Mapbox](https://www.mapbox.com/)
- [Open Calgary API dataset](https://data.calgary.ca/)

## How to use the webpage:
* After installing `requirements.txt`, run `application.py` and get the server link `http://127.0.0.1:5000/`. Copy the link and paste it to browser to get to the home page of the website, where you can have a close look at the traffic volumes flow map of Calgary.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/4%20Home%20Page.png)

* You can see the traffic incidents information of Calgary by clicking the **Incidents** button on the dropdown window of home. The number represents the number of incidents in the area, you can get more points by clicking the number.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/%E6%88%AA%E5%B1%8F2021-04-13%2018.52.12.png)

* The traffic incidents information of each points can be shown after clicking on the marker.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/14%20Traffic%20Incidents%20Popup.png)

* You can get to the login page by clicking  **Login** on the Navbar to get access to route design function.
![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/8%20Login%20Page.png)

* If you are new to the page, you need to get to the registration page by clicking `Don't have account?` in the login window first.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/9%20Registration%20Page.png)

* After logging in, you can see the route design page, where you can see both the traffic volumes and incidents information. 

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/10%20Route%20Design%20Page.png)

* The red circles with a car symbol are places with high traffic incidents rate. You can get the risk level and the number of incidents happend in the area by moving your mouse towards the point.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/15%20Route%20Design%20Popup.png)

* You can get the recommended route by clicking A(Starting place) and B(Destination) on the map.

![Image text](https://raw.githubusercontent.com/shellyxielt/image/main/11%20Route%20Design%20Results.png)

* You can logout by clicking the **Logout** on the Navbar.

## Project Files
- `application.py`: Python file for app, contains all database models and site-essential functions such as login, registration, and route.
- `create.sql`: SQL commands for creating a table.
- `index_clustering.html`: Results of the clustering process of ArcGIS.
- `templates/layout.html`: Layout page for `home.html`, `show.html`, `login.html` and `register.html`.
- `templates/home.html`: Traffic volumes flow map.
- `templates/show.html`: Traffic incidents information.
- `templates/login.html`: Login page.
- `templates/register.html`: Registration page.
- `templates/error.html`: Message alert page when the login or registration action fail.
- `templates/success_submit.html`: Message alert page when the registration action succeed.
- `templates/layout2.html`: Layout page for `home2.html`, `show2.html` and `route.html`.
- `templates/home2.html`: Traffic volumes flow map.
- `templates/show2.html`: Traffic incidents information.
- `templates/route.html`: Route design page.
- `static/js/home.js`: JS file for `home.html` and `home2.html`.
- `static/js/show.js`: JS file for `show.html` and `show2.html`.
- `static/js/route.js`: JS file for `route.html`.
- `static/styles/home.css`: CSS file for `home.html` and `home2.html`.
- `static/styles/style.css`: CSS file for `show.html` and `show2.html`.
- `static/styles/route.css`: CSS file for `route.html`.
- `static/styles/login.css`: CSS file for `login.html` and `register.html`.
