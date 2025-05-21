"use client";

import { useSaveTrackingTags } from "@/hooks/useTrackingTags";

export function TrackingTagsProvider() {
  useSaveTrackingTags("sessionStorage");
  return null;
}
