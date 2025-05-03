from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import os
from dotenv import load_dotenv

load_dotenv()


app = FastAPI()

# Permitir CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_methods=["*"],
    allow_headers=["*"],
)

YOUTUBE_API_KEY = os.getenv("YOUTUBE_API_KEY")
print("Chave da API do YouTube carregada:", YOUTUBE_API_KEY)


@app.get("/api/youtube")
def get_youtube_videos():
    channel_id = "UCE4elIT7DqDv545IA71feHg"
    
    url = (
        f"https://www.googleapis.com/youtube/v3/search?key={YOUTUBE_API_KEY}"
        f"&channelId={channel_id}&part=snippet,id&order=date&maxResults=6"
    )
    response = requests.get(url)
    data = response.json()
    return {"videos": data.get("items", [])}

