from bs4 import BeautifulSoup
import requests
import csv

baseUrl = "https://www.coursera.org"

# skillset = input().split(" ")

# per20Skills = "%20".join(skillset)

# courseraUrl = "https://www.coursera.org/search?query=" + per20Skills

# Testing an actual URL for scrapers. Uncomment above once the front-end
# has an option to enter user input

# test Url
courseraUrl = "https://www.coursera.org/search?query=scraping&"

# requests the page
page = requests.get(courseraUrl)

# gets the html of the page
soup = BeautifulSoup(page.text, 'html.parser')

# beautifulsoup finds the text for the title using a selector
title = soup.find("h2", {'class': "color-primary-text"}).text
# finds the text for all the titles on the page
titles = soup.find_all("h2", {'class': "color-primary-text"})
for title in titles:
    print(title.text)

dict_course = dict()

with open('scraperData.csv', 'w+', newline='') as file:
    fields = ['courseTitle']
    writer = csv.DictWriter(file, fieldnames=fields)
    writer.writeheader()

    for i in range(len(titles)):
        writer.writerow({'courseTitle': titles[i].text})


# popularity = soup.find("span", {'class': "enrollment"}).text

# output should be the text of the h2 selector
# print(title)
