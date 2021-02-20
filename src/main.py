import requests
import json
from bs4 import BeautifulSoup
import csv
import threading
import logging
import os

def url_generator(path):
    return f"https://npepa32v9l.execute-api.us-east-1.amazonaws.com/v2/?project_id=19989138&filename=python/zero-ao-python/{path}&ref=master"


def htmlpath(path):
    """Returns a new path to create a new html file"""
    filelocation = f"public/pages/{path}"
    print(filelocation)

    return filelocation


def remove_tags_from_page(page):
    soup = BeautifulSoup(page, features="html.parser")
    output_html = ""

    for tag in soup:

        for link in soup.find_all("link"):
            # This loop removes all <link>"s and self resources from page
            link.decompose()

        for script in soup.find_all("script"):
            # This loop removes all <script>"s and self resources from page
            script.decompose()

        if "Global site tag" not in tag:
            output_html += f"{tag}"

    return output_html.strip()


# CREATE A FUNCTION THAT"S MAKE A JSON FILE WITH LINK AND CONTENT
def create_json_file(url, content, file):
    # THIS FUNCTION NEEDS TO CREATE A JSON BLOCK THAT STILL THE LESSON_ARRAY.JS STYLE
    ...


# CREATE A FUNCTION THAT"S READ THE FILE, AND RETURNS A LIST TO APPEND IN THE JSON FILE
def read_json_file():
    ...


def create_html_page(file, path):
    r = requests.get(
        url_generator(path)
    )

    content = remove_tags_from_page(r.text)

    with open(file, "w") as htmlfile:
        htmlfile.write(content)

    print(r.url)

    return "_" * 50


def jsonfile_reader():
    # NEED TO PUT ARGS IN IT, COWBOY!!!!
    ...

def process_learnin_resources(start, end, l_rs):
    for l_r in l_rs[start: end]:
        create_html_page(htmlpath(l_r.get('local')), l_r.get('remote'))

QTD_THREADS = 14

if __name__ == "__main__":
    with open('arquivos.csv') as f:
        l_rs = [l_r for l_r in csv.DictReader(f)]
        
        # calculo e produção de slices
        qtd_thrad_process = int(len(l_rs)/(QTD_THREADS - 2))
        split_points = list(range(0,len(l_rs), qtd_thrad_process))
        mapping_points = list(zip([0] +split_points, split_points + [None]))
        print(len(mapping_points), mapping_points)
        threads = []

        for start, end in mapping_points:
            x = threading.Thread(target=process_learnin_resources, args=(start, end, l_rs))
            threads.append(x)
            x.start()
        
        for index, thread in enumerate(threads):
            print(f"Main    : before joining thread {index}.")
            thread.join()
            print(f"Main    : thread {index} done")

    os.system('git pull')
    os.system('git add public/pages')
    os.system('git commit -m "fix: adding/updating learning resources"')
    os.system('git push')
