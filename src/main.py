import requests
import json
from bs4 import BeautifulSoup

r = requests.get(
    "https://npepa32v9l.execute-api.us-east-1.amazonaws.com/v2/?project_id=19989138&filename=python/0_e_s1_data_structure.html&ref=master"
)


def remove_tags_from_page(page):
    soup = BeautifulSoup(page, features="html.parser")
    output_html = ""

    for tag in soup:

        for link in soup.find_all('link'):
            # This loop removes all <link>'s and self resources from page
            link.decompose()

        for script in soup.find_all('script'):
            # This loop removes all <script>'s and self resources from page
            script.decompose()

        output_html += f"{tag}"

    return output_html.strip()[:-370]


# CREATE A FUNCTION THAT'S MAKE A JSON FILE WITH LINK AND CONTENT
def create_json_file(url, content, file):

    content_block = {
        "url": url,
        "content": content
    }

    with open(file, 'w') as jsonfile:
        json.dump(content_block, jsonfile, indent=2)

# CREATE A FUNCTION THAT'S READ THE FILE, AND RETURNS A LIST TO APPEND IN THE JSON FILE


def jsonfile_reader():
    # NEED TO PUT ARGS IN IT, COWBOY!!!!
    ...


p = remove_tags_from_page(r.text)
# print(p)

c = create_json_file(r.url, p, 'public/content.json')
print(c)
