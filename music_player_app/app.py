from flask import Flask, render_template
import os
import random

app = Flask(__name__)

# Define the path to your audio files
audio_dir = 'static/music'
audio_files = [f for f in os.listdir(audio_dir) if f.endswith('.wav')]

@app.route('/')
def index():
    # Pick a random audio file
    random_song = random.choice(audio_files)
    
    return render_template('index.html', random_song=random_song)

if __name__ == '__main__':
    app.run(debug=False)

