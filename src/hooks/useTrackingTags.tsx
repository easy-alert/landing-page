"use client";

import { useEffect, useState } from "react";

import { useSearchParams } from "next/navigation";

const TAG_KEYS = [
  "utm_campaign",
  "utm_source",
  "utm_medium",
  "utm_term",
  "gad_source",
  "gad_campaignid",
  "gclid",
  "gbraid",
  "fbclid",
];

type StorageType = "sessionStorage" | "localStorage";

export const useSaveTrackingTags = (
  storageType: StorageType = "sessionStorage"
) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const storage = window[storageType];
    const collected: Record<string, string> = {};

    TAG_KEYS.forEach((key) => {
      const value = searchParams.get(key) || storage.getItem(key);

      if (
        searchParams.get(key) &&
        storage.getItem(key) !== searchParams.get(key)
      ) {
        storage.setItem(key, searchParams.get(key)!);
      }

      if (value) {
        collected[key] = value;
      }
    });
  }, [searchParams, storageType]);
};

export const useGetTrackingTags = (
  storageType: StorageType = "sessionStorage"
) => {
  const [tags, setTags] = useState<Record<string, string>>({});

  useEffect(() => {
    const storage = window[storageType];
    const collected: Record<string, string> = {};

    TAG_KEYS.forEach((key) => {
      const value = storage.getItem(key);

      if (value) {
        collected[key] = value;
      }
    });

    setTags(collected);
  }, [storageType]);

  return tags;
};
