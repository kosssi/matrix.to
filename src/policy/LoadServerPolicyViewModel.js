/*
Copyright 2020 The Matrix.org Foundation C.I.C.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {ViewModel} from "../utils/ViewModel.js";
import {resolveServer} from "../preview/HomeServer.js";

export class LoadServerPolicyViewModel extends ViewModel {
    constructor(options) {
        super(options);
        this.server = options.server;
        this.message = `Recherche de la politique de confidentialité de ${this.server}…`;
        this.loading = false;
    }

    async load() {
        this.loading = true;
        this.emitChange();
        try {
            const homeserver = await resolveServer(this.request, this.server);
            if (homeserver) {
                const url = await homeserver.getPrivacyPolicyUrl();
                if (url) {
                    this.message = `Chargement de la politique de confidentialité de ${this.server}…`;
                    this.openLink(url);
                } else {
                    this.loading = false;
                    this.message = `${this.server} ne déclare pas de politique de confidentialité.`;
                }
            } else {
                this.loading = false;
                this.message = `${this.server} ne semble pas être un serveur d'accueil matrix.`;
            }
        } catch (err) {
            this.loading = false;
            this.message = `Impossible d'obtenir la politique de confidentialité de ${this.server}`;
        }
        this.emitChange();
    }
}
