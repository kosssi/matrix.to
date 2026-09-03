/*
Copyright 2021 The Matrix.org Foundation C.I.C.

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

import {TemplateView} from "../utils/TemplateView.js";

export class DisclaimerView extends TemplateView {
    render(t) {
        return t.div({ className: "DisclaimerView card" }, [
            t.h1("Avertissement"),
            t.p(
                'Matrix.to est un service fourni par la Matrix.org Foundation ' +
                'qui permet de créer facilement des invitations vers des salons et comptes Matrix, ' +
                'quel que soit votre serveur d\'accueil Matrix. Le service est fourni « tel quel » sans ' +
                'garantie d\'aucune sorte, qu\'elle soit expresse, implicite, légale ou autre. ' +
                'La Matrix.org Foundation ne pourra être tenue responsable du contenu des salons ' +
                'et des comptes partagés via ce service.'
            ),
        ]);
    }
}
