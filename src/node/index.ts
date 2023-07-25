// Dependencies
import {
  Service,
  ServiceContext,
  RecorderState,
  ClientsConfig,
  ParamsContext,
} from '@vtex/api'

// Routes
import routes from './routes'

// Clients
import { Clients } from './clients'

const SIX_SECONDS_MS = 6 * 1000

declare global {
  type State = RecorderState
  type Context = ServiceContext<Clients, State, ParamsContext>
}

const clients: ClientsConfig<Clients> = {
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 3,
      timeout: SIX_SECONDS_MS,
    },
  },
}

export default new Service<Clients, State, ParamsContext>({
  clients,
  routes,
})
