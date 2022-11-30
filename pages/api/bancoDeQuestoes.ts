import QuestaoModel from "../../model/questao";
import RespostaModel from "../../model/resposta";

const questoes: QuestaoModel[] = [
    new QuestaoModel(306, 'What is the most used social network in the world?', [
        RespostaModel.errada('Youtube'),
        RespostaModel.errada('WhatsApp'),
        RespostaModel.errada('Instagram'),
        RespostaModel.certa('Facebook'),
    ]),
    new QuestaoModel(202, 'The world cup final will be played in which country in 2022?', [
        RespostaModel.errada('Russia'),
        RespostaModel.errada('Brazil'),
        RespostaModel.errada('United States'),
        RespostaModel.certa('Qatar'),
    ]),
    new QuestaoModel(203, 'What is the biggest island in the world?', [
        RespostaModel.errada('Madagascar'),
        RespostaModel.errada('Mykonos'),
        RespostaModel.errada('Bali'),
        RespostaModel.certa('Greenland'),
    ]),
    new QuestaoModel(204, 'What country was Freddie Mercury born in?', [
        RespostaModel.errada('England'),
        RespostaModel.errada('Japan'),
        RespostaModel.errada('United States'),
        RespostaModel.certa('Tanzania'),
    ]),
    new QuestaoModel(207, 'Who is the best football player the world in 2022?', [
        RespostaModel.errada('Neymar'),
        RespostaModel.errada('Cristiano Ronaldo'),
        RespostaModel.errada('Modric'),
        RespostaModel.certa('Benzema'),
    ]),
    new QuestaoModel(208, 'What is the capital of Sweden?', [
        RespostaModel.errada('Berlin'),
        RespostaModel.errada('Madrid'),
        RespostaModel.errada('New York'),
        RespostaModel.certa('Stockholm'),
    ]),
    new QuestaoModel(209, 'In the tragedy of the twin towers in New York, who was the current president?', [
        RespostaModel.errada('Barack Obama'),
        RespostaModel.errada('Hillary Clinton'),
        RespostaModel.errada('Bill Clinton'),
        RespostaModel.certa('George W. Bush'),
    ]),
    new QuestaoModel(210, 'What is the biggest city in the world?', [
        RespostaModel.errada('Beijing'),
        RespostaModel.errada('Mumbai'),
        RespostaModel.errada('Delhi'),
        RespostaModel.certa('Tokyo'),
    ]),
    new QuestaoModel(211, 'In which part of the body does thought process?', [
        RespostaModel.errada('Head'),
        RespostaModel.errada('Hands'),
        RespostaModel.errada('Eyes'),
        RespostaModel.certa('Brain'),
    ]),
    
    new QuestaoModel(213, 'Where is the Eiffel Tower located?', [
        RespostaModel.errada('New York'),
        RespostaModel.errada('Rio de Janeiro'),
        RespostaModel.errada('Moscow'),
        RespostaModel.certa('Paris'),
    ]),
    new QuestaoModel(214, 'The white tiger originates from which country?', [
        RespostaModel.errada('Israel'),
        RespostaModel.errada('Australia'),
        RespostaModel.errada('South Africa'),
        RespostaModel.certa('India'),
    ]),
    new QuestaoModel(215, 'What were the two main activities of the Aztecs?', [
        RespostaModel.errada('Fishing and hunting'),
        RespostaModel.errada('Oil production and mineral exploration'),
        RespostaModel.errada('Gold and silver'),
        RespostaModel.certa('Agriculture and crafts'),
    ]),
    new QuestaoModel(216, 'In which country is carnaval celebrated?', [
        RespostaModel.errada('France'),
        RespostaModel.errada('Colombia'),
        RespostaModel.errada('Buenos Aires'),
        RespostaModel.certa('Brazil'),
    ]),
]

export default questoes