import en_US from './en_US'

export default function getLocalizedText(deviceLanguage, key) {
    return en_US[key];
}