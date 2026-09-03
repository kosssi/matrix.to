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

import { Maturity, Platform, LinkKind, FlathubLink, WebsiteLink, style} from "../types.js";

/**
 * Information on how to deep link to a given matrix client.
 */
export class Thunderbird {
    get id() { return "thunderbird"; }
    get name() { return "Thunderbird"; }
    get icon() { return "images/client-icons/thunderbird.svg"; }
    get author() { return "MZLA Technologies Corporation"; }
    get homepage() { return "https://www.thunderbird.net"; }
    get platforms() {
        return [
            Platform.Windows, Platform.macOS, Platform.Linux,
        ];
    }
    get description() { return "Thunderbird est une application libre et gratuite de messagerie, calendrier et discussion."; }
    getMaturity(platform) {
        return Maturity.Beta;
    }

    getInstallLinks(platform) {
        const links = [];
        if (platform === Platform.Linux) {
            links.push(new FlathubLink("org.mozilla.Thunderbird"));
        }
        links.push(new WebsiteLink(this.homepage));
        return links;
    }

    getLinkInstructions(platform, link) {
        if (link.kind === LinkKind.User) {
            return "Ouvrez l'onglet Discussion, cliquez sur 'Ajouter un contact' et collez le nom d'utilisateur.";
        }
        if (link.kind === LinkKind.Room) {
            return [
                "Ouvrez l'onglet Discussion, cliquez sur 'Rejoindre une discussion' et collez l'identifiant, ou tapez ",
                style.code(`/join ${link.identifier}`),
                " dans une conversation Matrix existante."
            ];
        }
    }

    getCopyString(platform, link) {
        if (link.kind === LinkKind.User || link.kind === LinkKind.Room) {
            return link.identifier;
        }
    }

    getDeepLink(platform, link) {}

    canInterceptMatrixToLinks(platform) {
        return false;
    }

    getPreferredWebInstance(link) {}
}
