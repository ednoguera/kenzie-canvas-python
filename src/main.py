import requests
import json
from bs4 import BeautifulSoup


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

        for link in soup.find_all('link'):
            # This loop removes all <link>'s and self resources from page
            link.decompose()

        for script in soup.find_all('script'):
            # This loop removes all <script>'s and self resources from page
            script.decompose()

        if "Global site tag" not in tag:
            output_html += f"{tag}"

    return output_html.strip()


# CREATE A FUNCTION THAT'S MAKE A JSON FILE WITH LINK AND CONTENT
def create_json_file(url, content, file):

    content_block = {
        "module": "Fundamentos de programação com Python",
        "topicName": "INSTRUÇÕES PARA O CURSO",
        "lessonUrl": "https://experiencia.kenzie.com.br/courses/5/modules/items/295",
        "iframeUrl": "",
        "fileName": "l_00-instrucoes-para-o-curso",
        "lessonsList": [
            {
                "module": "Fundamentos de programação com Python",
                "lessonName": "00 - Orientações gerais para o curso",
                "lessonUrl": "https://experiencia.kenzie.com.br/courses/5/modules/items/232",
                "iframeUrl": "/pages/00-instrucoes.html",
                "fileName": ""
            }
        ],
        "issuesList": []
    },

    with open(file, 'w') as jsonfile:
        json.dump(content_block, jsonfile, indent=2)

    return content_block

# CREATE A FUNCTION THAT'S READ THE FILE, AND RETURNS A LIST TO APPEND IN THE JSON FILE


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


file_1 = create_html_page(
    htmlpath('00-instrucoes.html'), "0_ao_py_instrucoes.html")
print(file_1)

file_2 = create_html_page(
    htmlpath('01-google-colab.html'), "0_ao_py_google_colab.html")
print(file_2)

file_3 = create_html_page(
    htmlpath('02-codewars.html'), "0_ao_py_codewars.html")
print(file_3)

file_4 = create_html_page(
    htmlpath('03-variaveis.html'), "0_ao_py_variaveis.html")
print(file_4)

file_5 = create_html_page(
    htmlpath('04-pratica-variaveis.html'), "0_ao_py_pratica_variaveis.html"
)
print(file_5)

file_6 = create_html_page(
    htmlpath('05-estruturas-decisao.html'),
    "0_ao_py_estruturas_de_decisao.html"
)
print(file_6)

file_7 = create_html_page(
    htmlpath('06-pratica-estruturas-decisao.html'),
    "0_ao_py_pratica_estruturas_de_decisao.html"
)
print(file_7)

file_8 = create_html_page(
    htmlpath('07-strings.html'),
    "0_ao_py_strings.html"
)
print(file_8)


file_9 = create_html_page(
    htmlpath('08-pratica-strings.html'),
    "0_ao_py_pratica_strings.html"
)
print(file_9)


file_10 = create_html_page(
    htmlpath('09-listas.html'),
    "0_ao_py_lists.html"
)
print(file_10)


file_11 = create_html_page(
    htmlpath('10-pratica-listas.html'),
    "0_ao_py_pratica_lists.html"
)
print(file_11)


file_12 = create_html_page(
    htmlpath('11-tuplas.html'),
    "0_ao_py_tuplas.html"
)
print(file_12)


file_13 = create_html_page(
    htmlpath('12-pratica-tuplas.html'),
    "0_ao_py_pratica_tuplas.html"
)
print(file_13)


file_14 = create_html_page(
    htmlpath('13-loops.html'),
    "0_ao_py_loops.html"
)
print(file_14)


file_15 = create_html_page(
    htmlpath('14-pratica-loops.html'),
    "0_ao_py_pratica_loops.html"
)
print(file_15)


file_16 = create_html_page(
    htmlpath('15-funcoes.html'),
    "0_ao_py_funcoes.html"
)
print(file_16)


file_17 = create_html_page(
    htmlpath('16-pratica-funcoes.html'),
    "0_ao_py_pratica_funcoes.html"
)
print(file_17)


file_18 = create_html_page(
    htmlpath('17-dicionarios.html'),
    "0_ao_py_dicionarios.html"
)
print(file_18)


file_19 = create_html_page(
    htmlpath('18-iteracao-dicionarios.html'),
    "0_ao_py_iteracao_em_dicionarios.html"
)
print(file_19)


file_20 = create_html_page(
    htmlpath('19-pratica-dicionarios.html'),
    "0_ao_py_pratica_dicionarios.html"
)
print(file_20)


file_21 = create_html_page(
    htmlpath('20-pratica-iteracao-dicionarios.html'),
    "0_ao_py_pratica_iteracao_em_dicionarios.html"
)
print(file_21)


file_22 = create_html_page(
    htmlpath('21-csv.html'),
    "0_ao_py_csv.html"
)
print(file_22)


file_23 = create_html_page(
    htmlpath('22-processando-csv.html'),
    "0_ao_py_processando_csv.html"
)
print(file_23)


file_24 = create_html_page(
    htmlpath('23-criacao-graficos.html'),
    "0_ao_py_criacao_de_graficos.html"
)
print(file_24)


file_25 = create_html_page(
    htmlpath('24-pratica-csv.html'),
    "0_ao_py_pratica_csv.html"
)
print(file_25)


file_26 = create_html_page(
    htmlpath('25-pratica-processando-csv.html'),
    "0_ao_py_pratica_processando_csv.html"
)
print(file_26)


file_27 = create_html_page(
    htmlpath('26-pratica-criacao-graficos.html'),
    "0_ao_py_pratica_criacao_de_graficos.html"
)
print(file_27)
