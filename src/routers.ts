import IndexView from "./view/Index.svelte"
import SearchView from "./view/SearchView.svelte"

const routes = {
  '/': IndexView,
  '/search' :  SearchView
}

export default routes