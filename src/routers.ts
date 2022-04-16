import IndexView from "./view/Index.svelte"
import NotFound from "./view/NotFound.svelte"
import ProjectView from "./view/ProjectView.svelte"
import SearchView from "./view/SearchView.svelte"

const routes = {
  '/': IndexView,
  '/search' :  SearchView,
  '/project/:project' : ProjectView,
  '*' : NotFound
}

export default routes