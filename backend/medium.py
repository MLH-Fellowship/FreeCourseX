from bs4 import BeautifulSoup
import requests
import csv

baseUrl = "https://medium.com/"

# *** Testing an actual URL for scrapers. Uncomment above once the front-end
# has an option to enter user input ***

# test Url
# mediumUrl = "https://medium.com/search?q=scraping"

# requests the page
# page = requests.get(mediumUrl)

# gets the html of the page
# soup = BeautifulSoup(page.text, 'html.parser')


def getMediumCourses(topic):
    skillset = topic.split(" ")

    per20Skills = "%20".join(skillset)

    mediumUrl = "https://medium.com/search?q=" + per20Skills

    # requests the page
    page = requests.get(mediumUrl)

    # gets the html of the page
    soup = BeautifulSoup(page.text, 'html.parser')

    title_all = soup.find_all("h3", {'class': "graf-after--figure"})
    # for title in title_all:
    #     print(title.text)

    link_all = soup.find_all("a", {'class': ""})
    links = []
    for link in link_all:
        links.append(link.get('href'))
    # print(links)

    popularity = soup.find("span", attrs={'class': "u-relative"}).text
    # print(popularity)

    popularity_all = soup.find_all("span", attrs={'class': "u-relative"})
    # for popularity in popularity_all:
    #     print(popularity.text)

    difficulty_all = soup.find_all("span", attrs={'class': "difficulty"})
    if difficulty_all is None:
        difficulty = None
    else:
        pass
    for difficulty in difficulty_all:
        print(difficulty.text)

    duration = soup.find("span", attrs={'class': "readingTime"}).get('title')
    # print(duration)

    duration_all = soup.find_all("span", attrs={'class': "readingTime"})
    # for duration in duration_all:
    #     print(duration.get('title'))

    dict_course = dict()

    with open('scraperData.csv', 'a', newline='') as file:
        fields = ['courseTitle', 'courseLink', 'coursePopularity',
                  'courseDifficulty', 'courseDuration']
        writer = csv.DictWriter(file, fieldnames=fields)
        writer.writeheader()

        for i in range(len(title_all)):
            writer.writerow(
                {
                    'courseTitle': title_all[i].text,
                    'courseLink': links[i],
                    'coursePopularity': popularity_all[i].text,
                    # 'courseDifficulty': difficulty_all[i].text,
                    'courseDuration': duration_all[i].get('title')
                }
            )
