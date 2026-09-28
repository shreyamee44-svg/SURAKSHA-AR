import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import Animated, { FadeIn, FadeInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { Icon } from "@/src/components/ui";
import { useI18n } from "@/src/i18n";
import { loadProfile } from "@/src/api";
import { makeStyles, useTheme } from "@/src/theme";

export default function Splash() {
  const router = useRouter();
  const { t, ready } = useI18n();
  const styles = useStyles();
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(async () => {
      const profile = await loadProfile();
      if (profile) router.replace("/dashboard");
      else router.replace("/language");
    }, 1600);
    return () => clearTimeout(timer);
  }, [ready, router]);

  return (
    <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]} testID="splash-screen">
      <Animated.View entering={FadeIn.duration(500)} style={styles.center}>
        <View style={styles.logo}>
          <Icon name="hard-hat" size={64} color={colors.brandPrimary} />
        </View>
        <Animated.Text entering={FadeInUp.delay(200)} style={styles.title}>
          {t("appName")}
        </Animated.Text>
        <Animated.Text entering={FadeInUp.delay(350)} style={styles.subtitle}>
          {t("tagline")}
        </Animated.Text>
        <Animated.Text entering={FadeInUp.delay(500)} style={styles.govt}>
          {t("govtLine")}
        </Animated.Text>
      </Animated.View>
      <View style={styles.footer}>
        <ActivityIndicator color={colors.brandPrimary} />
        <Text style={styles.footerText}>Government of Jharkhand · Skill India</Text>
      </View>
    </View>
  );
}

const useStyles = makeStyles((c) => ({
  container: { flex: 1, backgroundColor: c.surfaceInverse, alignItems: "center", justifyContent: "center" },
  center: { alignItems: "center", paddingHorizontal: 32 },
  logo: {
    width: 120, height: 120, borderRadius: 60, backgroundColor: c.onBrand,
    alignItems: "center", justifyContent: "center", marginBottom: 24,
  },
  title: { fontSize: 34, fontWeight: "900", color: c.onSurfaceInverse, letterSpacing: 1 },
  subtitle: { fontSize: 16, fontWeight: "600", color: c.brandPrimary, marginTop: 8, textAlign: "center" },
  govt: { fontSize: 13, color: c.muted, marginTop: 6, textAlign: "center" },
  footer: { position: "absolute", bottom: 48, alignItems: "center", gap: 10 },
  footerText: { fontSize: 12, color: c.muted },
}));
