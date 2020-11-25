from bs4 import BeautifulSoup
import requests
import csv

baseUrl = "https://www.coursera.org"

# skillset = input().split(" ")

# per20Skills = "%20".join(skillset)

# courseraUrl = "https://www.coursera.org/search?query=" + per20Skills

# *** Testing an actual URL for scrapers. Uncomment above once the front-end
# has an option to enter user input ***

# test Url
courseraUrl = "https://www.coursera.org/search?query=scraping&"

# requests the page
page = requests.get(courseraUrl)

# gets the html of the page
soup = BeautifulSoup(page.text, 'html.parser')

# beautifulsoup finds the text for the title using a selector
# title = soup.find("h2", {'class': "color-primary-text"}).text

# finds the text for all the titles on the page


def getCourseraCourses():
    title_all = soup.find_all("h2", {'class': "color-primary-text"})
    for title in title_all:
        print(title.text)

    popularity = soup.find("span", attrs={'class': "enrollment-number"}).text
    print(popularity)

    popularity_all = soup.find_all(
        "span", attrs={'class': "enrollment-number"})
# for popularity in popularity_all:
#     print(popularity.text)

    difficulty = soup.find("span", attrs={'class': "difficulty"}).text
    print(difficulty)

    difficulty_all = soup.find_all("span", attrs={'class': "difficulty"})
# for difficulty in difficulty_all:
#     print(difficulty.text)

    dict_course = dict()
    with open('scraperData.csv', 'w+', newline='') as file:
        fields = ['courseTitle', 'coursePopularity', 'courseDifficulty']
        writer = csv.DictWriter(file, fieldnames=fields)
        writer.writeheader()

        for i in range(len(title_all)):
            writer.writerow(
                {
                    'courseTitle': title_all[i].text,
                    'coursePopularity': popularity_all[i].text,
                    'courseDifficulty': difficulty_all[i].text
                }
            )


getCourseraCourses()
