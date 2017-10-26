import fetchJsonp from 'fetch-jsonp'
import { GigService, Matcher } from './MosicaCore'
import { HttpClient } from './HttpClient'

export const gigService = new GigService(HttpClient(fetchJsonp), new Matcher())
