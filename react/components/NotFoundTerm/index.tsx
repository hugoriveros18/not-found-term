import React from "react";
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext';
import { useCssHandles } from 'vtex.css-handles';

const CSS_HANDLES = [
  'not-found-term__global-container',
  'not-found-term__oops',
  'not-found-term__text',
  'not-found-term__text--term',
  'not-found-term__correction'
]

const NotFoundTerm = () => {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //SEARCH CONTEXT
  const searchPage = useSearchPage();

  //JSX
  return(
    <div className={`${handles['not-found-term__global-container']}`}>
      <h3 className={`${handles['not-found-term__oops']}`}>¡OOPS!</h3>
      <p className={`${handles['not-found-term__text']}`}>
        Lo sentimos, no encontramos resultados para <span className={`${handles['not-found-term__text--term']}`}>`{searchPage?.params.term}`</span>
      </p>
      <p className={`${handles['not-found-term__correction']}`}>Revisa la ortografía  |  Intenta buscar con un término más general</p>
    </div>
  )
}

export default NotFoundTerm;
