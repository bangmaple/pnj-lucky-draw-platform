import {TopbarComponent} from './topbar.component';

export const TopbarItems = (app: TopbarComponent) => [
    {
        label: `<div class="p-d-flex p-jc-center">
                    <img class="p-mt-1" height="40" alt="PNJ" src="./assets/logo-pnj-v3.png"/>
                    <h4 class="p-ml-2 p-mt-3">PNJ Events</h4>
                </div>`,
        escape: false
    }
];
