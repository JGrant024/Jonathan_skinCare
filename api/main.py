from fastapi import FastAPI, HTTPException, Depends; 
from fastapi.responses import JSONResponse; 
from fastapi.middleware.cors import CORSMiddleware; 
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm


app = FastAPI() 
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

origins = [
    "http://localhost:*", 
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware, 
    allow_origins = origins, 
    allow_credentials = True, 
    allow_methods =["*"], 
    allow_headers = ["*"]
)

@app.get("/")
def home(): 
    return{"message:" "Root Route"}

@app.post("/logout")
def logout():
    response = supabase.auth.sign_out()
    return "success"
