import { IMentor } from "@/api/services";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useMentorFormStore = defineStore("mentorForm", () => {
  const form = ref<Partial<IMentor>>({
    companies: [],
    skills: [],
    availableLevel: [],
    spheres: [],
    help: [],
  });
  const errors = ref<string[]>([]);

  const help = ref<string>("");

  const clear = () => {
    form.value = {
      companies: [],
      skills: [],
      availableLevel: [],
      spheres: [],
      help: [],
    };
    errors.value = [];
    help.value = "";
  }

  const validate = () => {
    errors.value = [];

    if (form.value.position === undefined || form.value.position === "") {
      errors.value.push("position");
    }
    if (form.value.email === undefined || form.value.email === "") {
      errors.value.push("email");
    }
    if (form.value.phone === undefined || form.value.phone === "") {
      errors.value.push("phone");
    }
    if (form.value.price === undefined || form.value.price === "") {
      errors.value.push("price");
    }
  };

  const assembleForm = () => {
    return {
      ...form.value,
      help: help.value
        .split("-")
        .map((item) => (item.endsWith("\n") ? item.slice(0, -1) : item))
        .filter((_, index) => index !== 0),
    };
  };

  return {
    form,
    help,
    errors,
    validate,
    assembleForm,
    clear,
  };
});
