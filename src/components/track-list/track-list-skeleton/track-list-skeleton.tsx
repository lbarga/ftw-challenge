import { TrackSkeleton } from "./track-list-skeleton.styles";

export const TrackListSkeleton = () => {
  return (
    <div>
      <TrackSkeleton variant="rectangular" />
      <TrackSkeleton variant="rectangular" />
      <TrackSkeleton variant="rectangular" />
      <TrackSkeleton variant="rectangular" />
      <TrackSkeleton variant="rectangular" />
      <TrackSkeleton variant="rectangular" />
    </div>
  );
};
