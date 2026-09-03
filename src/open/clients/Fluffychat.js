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

import { Maturity, Platform, LinkKind, FlathubLink, AppleStoreLink, PlayStoreLink, FDroidLink, WebsiteLink } from "../types.js";

/**
 * Information on how to deep link to a given matrix client.
 */
export class Fluffychat {
    get id() { return "im.fluffychat"; }
    get name() { return "FluffyChat"; }
    get icon() { return "images/client-icons/fluffychat.svg"; }
    get author() { return "Krille Fear"; }
    get homepage() { return "https://fluffychat.im"; }
    get platforms() {
        return [
            Platform.Android, Platform.iOS,
            Platform.Windows, Platform.macOS, Platform.Linux,
            Platform.DesktopWeb,
        ];
    }
    get description() { return "Discutez avec vos amis en utilisant la messagerie la plus mignonne du réseau Matrix"; }
    getMaturity(platform) {
        switch (platform) {
            case Platform.Android: return Maturity.Stable;
            case Platform.iOS: return Maturity.Stable;
            case Platform.DesktopWeb: return Maturity.Stable;
            case Platform.Linux: return Maturity.Stable;
            case Platform.macOS: return Maturity.Beta;
            case Platform.Windows: return Maturity.Beta;
        }
    }

    getInstallLinks(platform) {
        switch (platform) {
            case Platform.iOS: return [new AppleStoreLink("fluffychat", "id1551469600")];
            case Platform.Android: return [
                new PlayStoreLink("chat.fluffy.fluffychat"),
                new FDroidLink('chat.fluffy.fluffychat'),
            ];
            case Platform.Linux: return [
                new FlathubLink("im.fluffychat.Fluffychat"),
                new WebsiteLink("https://fluffychat.im"),
            ];
            default: return [new WebsiteLink("https://fluffychat.im")];
        }
    }

    getLinkInstructions(platform, link) {
        if (link.kind === LinkKind.User) {
            switch (platform) {
                case Platform.Android: return;
                case Platform.DesktopWeb: return "Ouvrez l'application web sur https://fluffychat.im/web/ et connectez-vous à votre compte. Cliquez sur '+' et collez le nom d'utilisateur.";
                default: return "Ouvrez l'application et cliquez sur '+' puis collez le nom d'utilisateur.";
            }
        }
        if (link.kind === LinkKind.Room) {
            switch (platform) {
                case Platform.Android: return;
                case Platform.DesktopWeb: return "Ouvrez l'application web sur https://fluffychat.im/web/ et connectez-vous à votre compte. Cliquez sur 'Découvrir' et collez l'identifiant.";
                default: return "Ouvrez l'application sur votre appareil. Cliquez sur 'Découvrir' et collez l'identifiant.";
            }
        }
    }

    getCopyString(platform, link) {
        if (link.kind === LinkKind.User || link.kind === LinkKind.Room) {
            return link.identifier;
        }
    }

    getDeepLink(platform, link) {
        switch (platform) {
            case Platform.Android: return `im.fluffychat://chat/${link.identifier}`;
            case Platform.iOS: return `im.fluffychat://chat/${link.identifier}`;
            default: break;
        }
    }
    canInterceptMatrixToLinks(platform) {
        return platform === Platform.Android;
    }

    getPreferredWebInstance(link) {}
}
