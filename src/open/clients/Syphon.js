/*
Copyright 2020 The Matrix.org Foundation C.I.C.
Copyright 2022 0x1a8510f2 <admin@0x1a8510f2.space>

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

import { Maturity, Platform, LinkKind, FlathubLink, AppleStoreLink, PlayStoreLink, FDroidLink, WebsiteLink } from "../types.js";

export class Syphon {
    get id() { return "org.syphon.syphon"; }
    get name() { return "Syphon"; }
    get icon() { return "images/client-icons/syphon.svg"; }
    get author() { return "Taylor Ereio"; }
    get homepage() { return "https://syphon.org"; }
    get platforms() {
        return [
            Platform.Android,
            Platform.iOS,
            Platform.Linux,
            Platform.Windows,
            Platform.macOS,
            //Platform.DesktopWeb, // Supported by flutter but no builds yet
        ];
    }
    get description() {
        return "discutez en toute confidentialité et liberté";
    }

    getMaturity(platform) {
        return Maturity.Alpha;
    }

    getInstallLinks(platform) {
        switch (platform) {
            case Platform.Android: return [
                new PlayStoreLink("org.tether.tether"),
                new FDroidLink("org.tether.tether"),
            ];
            case Platform.iOS: return [
                new AppleStoreLink("syphon", "id1496285352")
            ];
            case Platform.Linux: return [
                new FlathubLink("org.syphon.Syphon"),
                new WebsiteLink("https://syphon.org"),
            ];
            default: return [new WebsiteLink("https://syphon.org")];
        }
    }

    getLinkInstructions(platform, link) {
        if (link.kind === LinkKind.User) {
            return "Ouvrez l'application, cliquez sur le bouton de message direct (dans le bouton flottant \
                    en bas), puis collez l'identifiant.";
        }
        if (link.kind === LinkKind.Room) {
            return "Ouvrez l'application, cliquez sur le bouton de recherche de salons publics (dans le bouton flottant \
                en bas), puis collez l'identifiant.";
        }
    }

    getCopyString(platform, link) {
        if (link.kind === LinkKind.User || link.kind === LinkKind.Room) {
            return link.identifier;
        }
    }

    getDeepLink(platform, link) {
        /*switch (platform) {
            case Platform.Android: return `org.tether.tether://chat/${link.identifier}`;
            case Platform.iOS: return `org.tether.tether://chat/${link.identifier}`;
            default: break;
        }*/
    }

    canInterceptMatrixToLinks(platform) {
        return platform === Platform.Android;
    }

    getPreferredWebInstance(link) {}
}
