import en_US from './en_US'
import es_ES from './es_ES'
import pt_BR from './pt_BR'
import zh_Hans from './zh_Hans'


export default function getLocalizedText(deviceLanguage, key) {
    return en_US[key];
}