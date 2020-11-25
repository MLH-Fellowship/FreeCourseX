from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from coursera import getCourseraCourses

app = Flask(__name__)

CORS(app)


@app.route('/api', methods=['GET'])
def api():
    return {
        'coursePlatform': "Coursera",
        'title': 'Deeplearning',
        'time': '20 hours',
        'difficulty': 'hard',
        'style': ['video', 'self-paced']
    }


@app.route('/api/form', methods=['GET', 'POST'])
def form():
    jsonData = request.get_json(force=True)
    topic = jsonData['topic']
    learning_style = jsonData['learning-style']
    difficulty = jsonData['difficulty']
    duration = jsonData['duration']
    print(topic)
    print(learning_style)
    print(difficulty)
    print(duration)
    getCourseraCourses(topic)

    return "test"

# @app.route('/api/form', methods=['GET', 'POST'])
# def form():
#     content = request.get_json(silent=True)
#     print(content)  # Do your processing

#     return {
#         'hey yo': "OK"
#     }
