import { defineStore } from "pinia";

export const useFooter = defineStore("theFooter", {
  state: () => {
    return {
      cursorLocation: "",
      stereumStatus: true,
      isConsensusRunning: false,
      consensusClientIsOff: false,
      dialog: false,
      epochType: "",
      epoch: null,
      slot: null,
      status: "",
      title: "",
      first: "",
      second: "",
      installedServicesController: "",
      missingServices: false,
      prometheusIsOff: false,
      nodataMessage: "",

      idleTimer: false,
      idleTimerTime: 5,
      volState: true,
      isMuted: false,
    };
  },
  getters: {},
  actions: {},
});
