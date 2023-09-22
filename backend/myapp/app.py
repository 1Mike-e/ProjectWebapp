import os

from flask import Flask 

from extensions import db
from routes import main

def create_app():
    app = Flask(__name__)

    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://group3_backend_user:077oq8E0QGu2xpRT8jLA56NsRSViblhI@dpg-cj4li545kgrc739pljrg-a.oregon-postgres.render.com/group3_backend"  # Replace with your PostgreSQL credentials and database details
    #os.environ.get("DATABASE_URL")
    
    db.init_app(app)

    app.register_blueprint(main)

    return app

if "__name__" == "__main__":
    create_app()