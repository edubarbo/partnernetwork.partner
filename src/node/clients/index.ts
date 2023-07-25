import { IOClients } from '@vtex/api'

// Clients
import PartnerVTEXServices from './PartnerVTEXServices'

// Extend the default IOClients implementation with our own custom clients.
export class Clients extends IOClients {
  public get partnerVtexServices() {
    return this.getOrSet('partnerVtexServices', PartnerVTEXServices)
  }
}
