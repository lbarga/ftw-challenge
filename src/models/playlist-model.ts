interface TrackModel {
  id: string;
  name: string;
}

export interface ItemModel {
  track: TrackModel;
}

interface PlaylistTrackModel {
  items: ItemModel[];
}

export interface PlaylistModel {
  id: string;
  tracks: PlaylistTrackModel;
}
