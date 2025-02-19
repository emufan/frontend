import { convertEntities } from "../../../../src/fake_data/entity";
import { DemoConfig } from "../types";

export const demoEntitiesKernehed: DemoConfig["entities"] = () =>
  convertEntities({
    "zone.anna": {
      entity_id: "zone.anna",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Anna",
        icon: "mdi:home-variant",
      },
    },
    "zone.peak_hq": {
      entity_id: "zone.peak_hq",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "PEAK HQ",
        icon: "mdi:briefcase",
      },
    },
    "zone.bellas_jobb": {
      entity_id: "zone.bellas_jobb",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Bellas jobb",
        icon: "mdi:briefcase",
      },
    },
    "zone.geab": {
      entity_id: "zone.geab",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "GEAB",
        icon: "mdi:briefcase",
      },
    },
    "zone.mamma": {
      entity_id: "zone.mamma",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Mamma",
        icon: "mdi:home-variant",
      },
    },
    "zone.skolan": {
      entity_id: "zone.skolan",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "School",
        icon: "mdi:school",
      },
    },
    "zone.ica_fjallbacken": {
      entity_id: "zone.ica_fjallbacken",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "ICA Fj\u00e4llbacken",
        icon: "mdi:cart",
      },
    },
    "zone.tempo": {
      entity_id: "zone.tempo",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 50,
        friendly_name: "Tempo",
        icon: "mdi:cart",
      },
    },
    "zone.home": {
      entity_id: "zone.home",
      state: "zoning",
      attributes: {
        hidden: true,
        radius: 100,
        friendly_name: "Hem",
        icon: "mdi:home",
      },
    },
    "sensor.total_clients_wireless": {
      entity_id: "sensor.total_clients_wireless",
      state: "18",
      attributes: { friendly_name: "Total clients", icon: "mdi:account-group" },
    },
    "sensor.zwave_battery_front_door": {
      entity_id: "sensor.zwave_battery_front_door",
      state: "63",
      attributes: {
        friendly_name: "Battery",
        icon: "mdi:battery-60",
        unit_of_measurement: "%",
        device_class: "battery",
      },
    },
    "sensor.oskar_devices": {
      entity_id: "sensor.oskar_devices",
      state: "Home",
      attributes: {
        friendly_name: "Oskar",
        entity_picture: "/assets/kernehed/oscar.jpg",
      },
    },
    "sensor.bella_devices": {
      entity_id: "sensor.bella_devices",
      state: "Home",
      attributes: {
        friendly_name: "Bella",
        entity_picture: "/assets/kernehed/bella.jpg",
      },
    },
    "sensor.oskar_bluetooth": {
      entity_id: "sensor.oskar_bluetooth",
      state: "Eve's room",
      attributes: {
        friendly_name: "Oskar",
        entity_picture: "/assets/kernehed/oscar.jpg",
      },
    },
    "sensor.battery_oskar": {
      entity_id: "sensor.battery_oskar",
      state: "73",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Oskar battery",
        device_class: "battery",
      },
    },
    "sensor.battery_bella": {
      entity_id: "sensor.battery_bella",
      state: "88",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Bella battery",
        device_class: "battery",
      },
    },
    "binary_sensor.unifi_camera": {
      entity_id: "binary_sensor.unifi_camera",
      state: "off",
      attributes: {
        friendly_name: "Motion sensor camera",
        icon: "mdi:walk",
      },
    },
    "sensor.db_size": {
      entity_id: "sensor.db_size",
      state: "435",
      attributes: {
        unit_of_measurement: "MB",
        friendly_name: "DB size",
        icon: "mdi:database",
      },
    },
    "input_select.christmas_pattern": {
      entity_id: "input_select.christmas_pattern",
      state: "Rainbow",
      attributes: {
        options: [
          "None",
          "Color Waves",
          "Palette Test",
          "Pride",
          "Rainbow",
          "Rainbow Glitter",
          "Snow Glitter",
          "Confetti",
          "Juggle",
          "Sinelon",
          "BPM",
          "Solid",
        ],
        friendly_name: "Choose pattern:",
        icon: "mdi:snowflake",
      },
    },
    "input_select.christmas_palette": {
      entity_id: "input_select.christmas_palette",
      state: "Party",
      attributes: {
        options: [
          "None",
          "Rainbow",
          "Rainbow Stripe",
          "Cloud",
          "Lava",
          "Ocean",
          "Forest",
          "Party",
          "Heat",
        ],
        friendly_name: "Choose palette:",
        icon: "mdi:vanish",
      },
    },
    "binary_sensor.harmony_hub": {
      entity_id: "binary_sensor.harmony_hub",
      state: "on",
      attributes: {
        round_trip_time_avg: "1.971",
        round_trip_time_max: "2.937",
        round_trip_time_mdev: "",
        round_trip_time_min: "1.679",
        friendly_name: "Harmony hub",
        device_class: "connectivity",
        icon: "mdi:remote",
      },
    },
    "switch.rest_julbelysning": {
      entity_id: "switch.rest_julbelysning",
      state: "on",
      attributes: { friendly_name: "Julbelysning" },
    },
    "binary_sensor.ubiquiti_nvr": {
      entity_id: "binary_sensor.ubiquiti_nvr",
      state: "on",
      attributes: {
        round_trip_time_avg: "18.002",
        round_trip_time_max: "20.714",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.599",
        friendly_name: "NVR",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "binary_sensor.server_1": {
      entity_id: "binary_sensor.server_1",
      state: "on",
      attributes: {
        round_trip_time_avg: "24.237",
        round_trip_time_max: "30.101",
        round_trip_time_mdev: "",
        round_trip_time_min: "18.923",
        friendly_name: "ESXIone server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "binary_sensor.windows_server": {
      entity_id: "binary_sensor.windows_server",
      state: "on",
      attributes: {
        round_trip_time_avg: "16.386",
        round_trip_time_max: "16.579",
        round_trip_time_mdev: "",
        round_trip_time_min: "16.023",
        friendly_name: "Windows server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "binary_sensor.ubiquiti_controller": {
      entity_id: "binary_sensor.ubiquiti_controller",
      state: "on",
      attributes: {
        round_trip_time_avg: "18.033",
        round_trip_time_max: "20.503",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.703",
        friendly_name: "Ubiquiti controller",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "binary_sensor.server_2": {
      entity_id: "binary_sensor.server_2",
      state: "on",
      attributes: {
        round_trip_time_avg: "25.306",
        round_trip_time_max: "30.600",
        round_trip_time_mdev: "",
        round_trip_time_min: "21.483",
        friendly_name: "ESXItwo server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "alarm_control_panel.kernehed_manison": {
      entity_id: "alarm_control_panel.kernehed_manison",
      state: "disarmed",
      attributes: {
        code_format: ".+",
        changed_by: "",
        immediate: [],
        delayed: [],
        ignored: [
          "binary_sensor.back_door_sensor",
          "binary_sensor.skafferiet_motion_sensor",
          "binary_sensor.kallaren_motion_sensor",
          "binary_sensor.trapp_motion_sensor",
          "binary_sensor.banksensor",
          "binary_sensor.front_door_sensor",
          "binary_sensor.tvattstugan_motion_sensor",
        ],
        allsensors: [
          "binary_sensor.back_door_sensor",
          "binary_sensor.skafferiet_motion_sensor",
          "binary_sensor.kallaren_motion_sensor",
          "binary_sensor.trapp_motion_sensor",
          "binary_sensor.banksensor",
          "binary_sensor.front_door_sensor",
          "binary_sensor.tvattstugan_motion_sensor",
        ],
        code_to_arm: false,
        panel_locked: false,
        passcode_attempts: -1,
        passcode_attempts_timeout: 900,
        changedbyuser: null,
        panic_mode: "deactivated",
        arm_state: "disarmed",
        enable_perimeter_mode: true,
        enable_persistence: true,
        enable_log: true,
        log_size: 10,
        supported_statuses_on: [
          "on",
          "true",
          "unlocked",
          "open",
          "detected",
          "motion",
          "motion_detected",
          "motion detected",
        ],
        supported_statuses_off: [
          "off",
          "false",
          "locked",
          "closed",
          "undetected",
          "no_motion",
          "standby",
        ],
        updateUI: false,
        bwalarm_version: "1.1.3",
        py_version: [3, 6, 6, "final", 0],
        users: [
          {
            id: "3e84584273bb45b39597eeca75c61ed3",
            name: "Hass.io",
            enabled: true,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
          {
            id: "559b6d8184d2461cb326a5da9e235222",
            name: "Our Manison",
            enabled: true,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
          {
            id: "7c0447d2ec824aa98b81044ad9ec198f",
            name: "Legacy API password user",
            enabled: false,
            code: "****",
            picture: "/local/images/ha.png",
            disable_animations: false,
          },
        ],
        panel: {
          cameras: ["camera.kernehed_entre"],
          enable_sensors_panel: "True",
          camera_update_interval: "",
          panel_title: "Larmet",
          enable_clock: "True",
          enable_camera_panel: "True",
          enable_custom_panel: "False",
          round_buttons: "True",
          shadow_effect: "True",
          enable_serif_font: "True",
          enable_weather: "True",
        },
        logs: [
          [1547471423.044971, "HA", 0, null],
          [1547617402.0813534, "HA", 4, null],
          [1547646348.0161366, "HA", 5, "binary_sensor.front_door_sensor"],
          [1547646359.6248462, "HA", 0, null],
          [1547704923.3253074, "HA", 4, null],
          [1547736026.435811, "HA", 5, "binary_sensor.front_door_sensor"],
          [1547736043.3628922, "HA", 0, null],
          [1547736074.0326948, "HA", 0, null],
          [1547792963.66214, "HA", 4, null],
          [1547825941.6920404, "HA", 0, null],
        ],
        mqtt: {
          enable_mqtt: false,
          override_code: false,
          command_topic: "home/alarm/set",
          payload_arm_away: "ARM_AWAY",
          payload_arm_home: "ARM_HOME",
          qos: 0,
          payload_disarm: "DISARM",
          pending_on_warning: false,
          state_topic: "home/alarm",
          payload_arm_night: "ARM_NIGHT",
        },
        states: {
          armed_away: {
            immediate: [
              "binary_sensor.kallaren_motion_sensor",
              "binary_sensor.trapp_motion_sensor",
              "binary_sensor.banksensor",
              "binary_sensor.tvattstugan_motion_sensor",
              "binary_sensor.skafferiet_motion_sensor",
            ],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 300,
          },
          armed_home: {
            immediate: [],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 300,
          },
          armed_perimeter: {
            immediate: [],
            delayed: [
              "binary_sensor.back_door_sensor",
              "binary_sensor.front_door_sensor",
            ],
            override: [],
            pending_time: 25,
            warning_time: 25,
            trigger_time: 600,
          },
        },
        friendly_name: "Our Manison",
      },
    },
    "sensor.qbittorrent_down_speed": {
      entity_id: "sensor.qbittorrent_down_speed",
      state: "0.0",
      attributes: {
        unit_of_measurement: "kB/s",
        friendly_name: "Downloading",
        icon: "mdi:file-download",
      },
    },
    "sensor.qbittorrent_status": {
      entity_id: "sensor.qbittorrent_status",
      state: "idle",
      attributes: { friendly_name: "Status", icon: "mdi:resistor" },
    },
    "sensor.qbittorrent_up_speed": {
      entity_id: "sensor.qbittorrent_up_speed",
      state: "0.0",
      attributes: {
        unit_of_measurement: "kB/s",
        friendly_name: "Uploading",
        icon: "mdi:file-upload",
      },
    },
    "sensor.pi_hole_ads_blocked_today": {
      entity_id: "sensor.pi_hole_ads_blocked_today",
      state: "5952",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "ads",
        friendly_name: "Pi-Hole Ads Blocked Today",
        icon: "mdi:close-octagon-outline",
      },
    },
    "sensor.pi_hole_dns_unique_clients": {
      entity_id: "sensor.pi_hole_dns_unique_clients",
      state: "13",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "clients",
        friendly_name: "Pi-Hole DNS Unique Clients",
        icon: "mdi:account-outline",
      },
    },
    "sensor.pi_hole_dns_queries_today": {
      entity_id: "sensor.pi_hole_dns_queries_today",
      state: "14730",
      attributes: {
        domains_blocked: 112493,
        unit_of_measurement: "queries",
        friendly_name: "Pi-Hole DNS Queries Today",
        icon: "mdi:comment-question-outline",
      },
    },
    "sensor.memory_free": {
      entity_id: "sensor.memory_free",
      state: "514.3",
      attributes: {
        unit_of_measurement: "MiB",
        friendly_name: "Memory free",
        icon: "mdi:memory",
      },
    },
    "sensor.processor_use": {
      entity_id: "sensor.processor_use",
      state: "9",
      attributes: {
        unit_of_measurement: "%",
        friendly_name: "Processor use",
        icon: "mdi:memory",
      },
    },
    "binary_sensor.gaming_pc": {
      entity_id: "binary_sensor.gaming_pc",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.560",
        round_trip_time_max: "0.628",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.477",
        friendly_name: "Oskars dator",
        device_class: "connectivity",
        icon: "mdi:laptop",
      },
    },
    "sensor.speedtest_download": {
      entity_id: "sensor.speedtest_download",
      state: "37.89",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Download",
        icon: "mdi:speedometer",
      },
    },
    "sensor.speedtest_upload": {
      entity_id: "sensor.speedtest_upload",
      state: "49.0",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "Mbit/s",
        friendly_name: "Speedtest Upload",
        icon: "mdi:speedometer",
      },
    },
    "sensor.speedtest_ping": {
      entity_id: "sensor.speedtest_ping",
      state: "32.049",
      attributes: {
        attribution: "Data retrieved from Speedtest by Ookla",
        bytes_received: 47690753,
        bytes_sent: 61612032,
        server_country: "Sweden",
        server_id: "21028",
        latency: 32.049,
        server_name: "Kista",
        unit_of_measurement: "ms",
        friendly_name: "Speedtest Ping",
        icon: "mdi:speedometer",
      },
    },
    "sensor.last_boot": {
      entity_id: "sensor.last_boot",
      state: "2019-01-18T16:49:29+01:00",
      attributes: {
        unit_of_measurement: "",
        friendly_name: "Last boot",
        icon: "mdi:clock",
        device_class: "timestamp",
      },
    },
    "sensor.plex": {
      entity_id: "sensor.plex",
      state: "0",
      attributes: {
        unit_of_measurement: "Watching",
        friendly_name: "Plex",
        icon: "mdi:plex",
      },
    },
    "binary_sensor.teamspeak": {
      entity_id: "binary_sensor.teamspeak",
      state: "on",
      attributes: {
        round_trip_time_avg: "19.842",
        round_trip_time_max: "26.215",
        round_trip_time_mdev: "",
        round_trip_time_min: "15.690",
        friendly_name: "Teamspeak server",
        device_class: "connectivity",
        icon: "mdi:server-network",
      },
    },
    "sensor.disk_free_home": {
      entity_id: "sensor.disk_free_home",
      state: "8.9",
      attributes: {
        unit_of_measurement: "GiB",
        friendly_name: "Disk free /home",
        icon: "mdi:harddisk",
      },
    },
    "weather.smhi_vader": {
      entity_id: "weather.smhi_vader",
      state: "sunny",
      attributes: {
        temperature: -5,
        humidity: 75,
        pressure: 1003,
        wind_bearing: 263,
        wind_speed: 8,
        visibility: 20.6,
        attribution: "Swedish weather institute (SMHI)",
        forecast: [
          {
            datetime: "2019-01-19T13:00:00+01:00",
            temperature: -2,
            templow: -7,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-20T13:00:00+01:00",
            temperature: -7,
            templow: -12,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-21T13:00:00+01:00",
            temperature: -12,
            templow: -16,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-22T13:00:00+01:00",
            temperature: -5,
            templow: -17,
            precipitation: 2,
            condition: "snowy",
          },
          {
            datetime: "2019-01-23T13:00:00+01:00",
            temperature: -5,
            templow: -7,
            precipitation: 2,
            condition: "partlycloudy",
          },
          {
            datetime: "2019-01-24T13:00:00+01:00",
            temperature: -7,
            templow: -11,
            precipitation: 2,
            condition: "snowy",
          },
          {
            datetime: "2019-01-25T13:00:00+01:00",
            temperature: -10,
            templow: -10,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-26T13:00:00+01:00",
            temperature: -12,
            templow: -12,
            precipitation: 0,
            condition: "sunny",
          },
          {
            datetime: "2019-01-27T13:00:00+01:00",
            temperature: -4,
            templow: -6,
            precipitation: 0,
            condition: "partlycloudy",
          },
        ],
        cloudiness: 25,
        friendly_name: "Weather",
      },
    },
    "binary_sensor.ubiquiti_switch": {
      entity_id: "binary_sensor.ubiquiti_switch",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.459",
        round_trip_time_max: "0.535",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.324",
        friendly_name: "Switch",
        device_class: "connectivity",
        icon: "mdi:nas",
      },
    },
    "binary_sensor.entre_kamera": {
      entity_id: "binary_sensor.entre_kamera",
      state: "on",
      attributes: {
        round_trip_time_avg: "0.528",
        round_trip_time_max: "0.626",
        round_trip_time_mdev: "",
        round_trip_time_min: "0.358",
        friendly_name: "Entrance camera",
        device_class: "connectivity",
        icon: "mdi:cctv",
      },
    },
    "sensor.bella_tid_till_hem": {
      entity_id: "sensor.bella_tid_till_hem",
      state: "0",
      attributes: {
        destination_addresses: ["Stockholm, Sweden"],
        origin_addresses: ["Stockholm, Sweden"],
        status: "OK",
        mode: "transit",
        units: "metric",
        duration: "1 min",
        distance: "12 m",
        unit_of_measurement: "min",
        friendly_name: "Antal minuter hem",
        icon: "mdi:timer",
      },
    },
    "sensor.oskar_tid_till_hem": {
      entity_id: "sensor.oskar_tid_till_hem",
      state: "0",
      attributes: {
        destination_addresses: ["Stockholm, Sweden"],
        origin_addresses: ["Stockholm, Sweden"],
        status: "OK",
        mode: "driving",
        units: "metric",
        duration_in_traffic: "1 min",
        duration: "1 min",
        distance: "2 m",
        unit_of_measurement: "min",
        friendly_name: "Antal minuter hem",
        icon: "mdi:timer",
      },
    },
    "lock.polycontrol_danalock_v3_btze_locked": {
      entity_id: "lock.polycontrol_danalock_v3_btze_locked",
      state: "unlocked",
      attributes: {
        node_id: 28,
        value_index: 0,
        value_instance: 1,
        value_id: "72057594513489920",
        friendly_name: "Frontdoor",
      },
    },
    "binary_sensor.front_door_sensor": {
      entity_id: "binary_sensor.front_door_sensor",
      state: "off",
      attributes: {
        battery_level: 100,
        on: true,
        friendly_name: "Frontdoor sensor",
        device_class: "opening",
        icon: "mdi:door",
      },
    },
    "binary_sensor.altan_motion_sensor": {
      entity_id: "binary_sensor.altan_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 34,
        on: true,
        friendly_name: "altan_motion_sensor",
        device_class: "motion",
      },
    },
    "binary_sensor.back_door_sensor": {
      entity_id: "binary_sensor.back_door_sensor",
      state: "off",
      attributes: {
        battery_level: 88,
        on: true,
        friendly_name: "Back door sensor",
        device_class: "opening",
        icon: "mdi:door",
      },
    },
    "binary_sensor.badrumssensor": {
      entity_id: "binary_sensor.badrumssensor",
      state: "off",
      attributes: {
        battery_level: 74,
        on: true,
        friendly_name: "badrumssensor",
        device_class: "motion",
      },
    },
    "binary_sensor.trapp_motion_sensor": {
      entity_id: "binary_sensor.trapp_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 47,
        on: true,
        dark: true,
        friendly_name: "R\u00f6relsesensor k\u00e4llaren 1",
        device_class: "motion",
        icon: "mdi:walk",
      },
    },
    "binary_sensor.tvattstugan_motion_sensor": {
      entity_id: "binary_sensor.tvattstugan_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        dark: true,
        friendly_name: "Laundy room motion sensor",
        device_class: "motion",
        icon: "mdi:walk",
      },
    },
    "binary_sensor.dorrklockan": {
      entity_id: "binary_sensor.dorrklockan",
      state: "on",
      attributes: {
        battery_level: 100,
        on: true,
        friendly_name: "Doorbell",
        device_class: "opening",
        icon: "mdi:bell",
      },
    },
    "binary_sensor.skafferiet_motion_sensor": {
      entity_id: "binary_sensor.skafferiet_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        friendly_name: "R\u00f6relsesensor skafferiet",
        device_class: "motion",
        icon: "mdi:walk",
      },
    },
    "binary_sensor.kallaren_motion_sensor": {
      entity_id: "binary_sensor.kallaren_motion_sensor",
      state: "off",
      attributes: {
        battery_level: 60,
        on: true,
        dark: true,
        friendly_name: "R\u00f6relsesensor k\u00e4llaren 2",
        device_class: "motion",
        icon: "mdi:walk",
      },
    },
    "binary_sensor.banksensor": {
      entity_id: "binary_sensor.banksensor",
      state: "on",
      attributes: {
        battery_level: 47,
        on: true,
        dark: true,
        friendly_name: "B\u00e4nksensor",
        device_class: "motion",
      },
    },
  });
