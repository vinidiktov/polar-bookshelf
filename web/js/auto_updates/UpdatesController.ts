import {Logger} from "../logger/Logger";
import {ProgressInfo} from "builder-util-runtime";
import electron, {ipcRenderer} from 'electron';
import {ProgressBar} from "../ui/progress_bar/ProgressBar";
import {DeterminateProgressBar} from "../ui/progress_bar/DeterminateProgressBar";

const log = Logger.create();

export class UpdatesController {

    public start(): void {

        if (ipcRenderer) {

            ipcRenderer.on('app-update:download-progress', (event: any, progress: ProgressInfo) => {
                this.onProgressInfo(progress);
            });

        }

    }

    private onProgressInfo(progress: ProgressInfo) {

        const percent = Math.floor(progress.percent);

        DeterminateProgressBar.update(percent);

    }

}
