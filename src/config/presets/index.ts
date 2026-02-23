import type { BusinessPreset } from "../template.types";
import { annieslandbuildersgroupPreset } from "./annieslandbuildersgroup";
import { electricianPreset } from "./electrician";
import { plumberPreset } from "./plumber";
import { sclbuildersltdPreset } from "./sclbuildersltd";

export const presets: Record<string, BusinessPreset> = {
  annieslandbuildersgroup: annieslandbuildersgroupPreset,
  plumber: plumberPreset,
  electrician: electricianPreset,
  sclbuildersltd: sclbuildersltdPreset,
};

export const defaultPreset = sclbuildersltdPreset;
