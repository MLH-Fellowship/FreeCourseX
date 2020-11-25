from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api', methods=['GET'])
def api():
    return {
        'coursePlatform' : "Coursera",
        'title': 'Deeplearning',
        'time': '20 hours',
        'difficulty': 'hard',
        'style': ['video', 'self-paced']
    }

@app.route('/api/form', methods=['POST'])
def form():
    content = request.get_json(silent=True)
    print(content) # Do your processing

    return {
        'hey yo': "OK"
    }