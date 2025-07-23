import dayJsLib from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayJsLib.locale('pt-BR')
dayJsLib.extend(relativeTime)

export const dayjs = dayJsLib
