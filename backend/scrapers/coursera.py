from bs4 import BeautifulSoup
import requests

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

# beautifulsoup finds the text using a selector
found = soup.find("h2", {'class': "color-primary-text"}).text

# output should be the text of the h2 selector
print(found)
