import { MosicaRouter } from '../../services/MosicaRouter'
export let navigateToGigSpy = MosicaRouter().navigateToGig
navigateToGigSpy.mockClear()
